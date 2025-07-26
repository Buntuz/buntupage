# claims/views.py
from flask import Blueprint, render_template, request
import pandas as pd
import io
from flask import jsonify
from flask import make_response
from flask import session

claims_bp = Blueprint('claims', __name__, template_folder='templates')

@claims_bp.route('/section/claims')
def claims_page():
    return render_template('sections/claims.html')

@claims_bp.route('/submit-claim', methods=['POST'])
def submit_claim():
   
    #title = request.form.get('title')
    source_file = request.files.get('source_file')
    target_file = request.files.get('target_file')

    try:
        # Read CSVs into pandas DataFrames
        source_df = pd.read_csv(source_file)
        target_df = pd.read_csv(target_file)

        expected_source_cols = {'Loan Id'}
        expected_target_cols = {'Loan Id'}

        if not expected_source_cols.issubset(source_df.columns):
            return f"<p class='text-red-600'>Source file missing expected column: {expected_source_cols}</p>"

        if not expected_target_cols.issubset(target_df.columns):
            return f"<p class='text-red-600'>Target file missing expected column: {expected_target_cols}</p>"

         # Example Calculation: Count number of claims in each
        source_count = len(source_df)
        target_count = len(target_df)
        # Example Matching Logic
        source_claims = set(source_df['Loan Id'].astype(str).str.strip())
        target_claims = set(target_df['Loan Id'].astype(str).str.strip())
        common_claims = source_claims.intersection(target_claims)
        common_count = len(common_claims)
        match_pct = f"{(len(common_claims)/source_count)*100:.2f}%" if source_count > 0 else "0.00%"
        
        
        source_only = source_claims - target_claims
        target_only = target_claims - source_claims

        # Identify missing claims
        missing_claims = source_claims - target_claims
        missing_df = source_df[source_df['Loan Id'].isin(missing_claims)]
         # Create DataFrame of missing claims
        #missing_df = pd.DataFrame(missing_claims, columns=["Missing Loan Id"])
        
        # Save CSV content in session
        csv_io = io.StringIO()
        missing_df.to_csv(csv_io, index=False)
        session['missing_csv'] = csv_io.getvalue()  # Store as plain text in session


        csv_data = missing_df.to_csv(index=False)

        download_link = """
  <a href="/download-missing-claims" class="text-blue-700 underline">📄 Download Missing Claims</a>
"""

        message = f"""
        <div class="text-green-700 bg-green-100 border border-green-300 p-4 rounded space-y-2">
          <p><strong>Upload Success!</strong></p>
          <p>✅ Source claims: {source_count}</p>
          <p>✅ Target claims: {target_count}</p>
          <p>✅ Common claims: {len(common_claims)}</p>
          <p>🎯 Match rate: {match_pct}</p>
          <p>📊 Source file columns: {', '.join(source_df.columns)}</p>
          <p>{download_link}</p>
          <!-- Hidden inputs for chart JS -->
            <input type="hidden" id="source_count" value="{source_count}">
            <input type="hidden" id="target_count" value="{target_count}">
            <input type="hidden" id="common_count" value="{len(common_claims)}">
        </div>
        """

        # JSON Response
        return jsonify({
            "message": message,
            "chartData": {
                "labels": ["Source", "Target", "Common", "Source Only", "Target Only"],
                "values": [source_count, target_count, common_count, len(source_only), len(target_only)]
            }
        })
        return message
    except Exception as e:
        return f"<p class='text-red-600'>Error processing files: {str(e)}</p>"


@claims_bp.route('/download-missing-claims')
def download_missing_claims():
    csv_data = session.get('missing_csv')
    if not csv_data:
        return "<p class='text-red-600'>No missing claims data available.</p>"

    response = make_response(csv_data)
    response.headers['Content-Disposition'] = 'attachment; filename=missing_claims.csv'
    response.headers['Content-Type'] = 'text/csv'
    return response
