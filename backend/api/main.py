#main.py
from flask import Flask, jsonify, request
import db

app = Flask(__name__)

@app.route('/')
def home():
  return 'HOME PAGE'

@app.route('/showHW', methods=['GET'])
def show_hw():
  result = db.show_hw_assignment()
  return result

@app.route('/insertHW', methods=['POST'])
def insert_hw():
  result = db.insert_hw_assignment(request.get_json())
  return result

@app.route('/updateHW', methods=['PUT'])
def update_hw():
  result = db.update_hw_title(request.get_json())
  return result

@app.route('/deleteHW', methods=['DELETE'])
def delete_hw():
  result = db.delete_hw_assignment(request.get_json())
  return result

if __name__ == '__main__':
  app.run(debug=True)