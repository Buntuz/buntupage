from flask import Flask, render_template, request, jsonify,render_template_string
from loans.views import loans_bp
from reports.views import report_bp
from ariba.views import requisitions_bp
from claims.views import claims_bp

app = Flask(__name__)

app.register_blueprint(loans_bp)
app.register_blueprint(report_bp)
app.register_blueprint(requisitions_bp)
app.register_blueprint(claims_bp)

app.secret_key = 'lekwl934n9ew'  # Needed for session

loans = [
    {"title": "Home Loan", "amount": "$200K"},
    {"title": "Car Loan", "amount": "$30K"}
]

@app.route("/")
def home():
    return render_template("dashboard.html")

@app.route("/section/<name>", methods=["GET"])
def section(name):
  #  if name == "loans":
  #      return render_template(f"sections/loans.html", loans=loans)
    return render_template(f"sections/{name}.html")


if __name__ == "__main__":
    #app.run(debug=True, port=5002)
    app.run(debug=True, host='0.0.0.0', port=5002)
