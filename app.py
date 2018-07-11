# Dependencies
import pandas as pd
# Python SQL toolkit and Object Relational Mapper
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float 

from flask import (
    Flask,
    render_template,
    jsonify) 

# importing cleaned measurments data 
#data_file = "combo_data.csv"
# Read CSV file into a pandas DataFrame
#crime_health_df= pd.read_csv(data_file, dtype=object)

app = Flask(__name__)

@app.route("/")
def index():
    """Render Home Page."""
    return render_template('index.html')




if __name__ == "__main__":
    app.run(debug=True)

