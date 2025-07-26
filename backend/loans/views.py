# loans/views.py
from flask import Blueprint, render_template, request

loans_bp = Blueprint('loans', __name__, template_folder='templates')

@loans_bp.route('/section/loans')
def loans_page():
    return render_template('sections/loans.html')

@loans_bp.route('/submit-loan', methods=['POST'])
def submit_loan():
    title = request.form.get('title')
    amount = request.form.get('amount')
    message = f"<p class='text-green-600 font-semibold'>Loan <strong>{title}</strong> for <strong>${amount}</strong> submitted successfully! Buntu Ntozake</p>"
    return message
