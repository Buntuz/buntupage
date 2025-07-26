# reports/views.py
from flask import Blueprint, render_template, request


reports = [
        {
            "title": "Testing loans",
            "desc": "Reports testing data",
            "amount": "$4.5M",
            "status": "Active",
            "statusColor": "bg-green-100 text-green-600"
        },
        {
            "title": "Reporting loan",
            "desc": "Loan reporting and analytics",
            "amount": "$8.2M",
            "status": "Testing",
            "statusColor": "bg-yellow-100 text-yellow-600"
        },
        {
            "title": "Report Applications",
            "desc": "Reports on loan applications and assessments",
            "amount": "$15.7M",
            "status": "Active",
            "statusColor": "bg-green-100 text-green-600"
        },
        {
            "title": "Report Testing",
            "desc": "Bazooka testing reports",
            "amount": "$3.1M",
            "status": "Review",
            "statusColor": "bg-gray-200 text-gray-700"
        },
    ]

report_bp = Blueprint('reports', __name__, template_folder='templates')

@report_bp.route('/section/reports')
def report_page():
    return render_template('sections/reports.html', reports=reports)

@report_bp.route('/submit-report', methods=['POST'])
def submit_report():
    title = request.form.get('title')
    amount = request.form.get('amount')
    message = f"<p class='text-green-600 font-semibold'>Loan <strong>{title}</strong> for <strong>${amount}</strong> submitted successfully! Buntu Ntozake</p>"
    return message
