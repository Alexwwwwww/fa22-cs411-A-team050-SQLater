#main.py
from flask import Flask, jsonify, request
import db
import bargraphtest
import bargraphs
# from backend.graphs.bargraphtest import test
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
  return 'HOME PAGE'

@app.route('/isConnectionOpen', methods=['GET'])
@cross_origin()
def is_connection_open():
  result = db.is_connection_open()
  return result

#Homework Assignments CRUD
@app.route('/showHW', methods=['GET'])
def show_hw():
  result = db.show_hw_assignment()
  return result

@app.route('/insertHW', methods=['POST'])
@cross_origin()
def insert_hw():
  db.insert_hw_assignment(request.get_json())
  return show_hw()

@app.route('/updateHW', methods=['PUT'])
@cross_origin()
def update_hw():
  db.update_hw_title(request.get_json())
  return show_hw()

@app.route('/deleteHW', methods=['DELETE'])
@cross_origin()
def delete_hw():
  db.delete_hw_assignment(request.get_json())
  return show_hw()

# Advanced queries
@app.route('/getAvgScoreByQuestionHWGA', methods=['GET'])
@cross_origin()
def advanced_query1():
  return db.get_avg_score_by_question_hw_ga()

@app.route('/getUINOverallGrade', methods=['POST', 'GET'])
@cross_origin()
def advanced_query2():
  return db.get_uin_overall_grade(request.get_json())

#Don't need
# @app.route('/searchHW', methods=['POST', 'GET'])
# def search_hw():
#   return db.search_hw_assignment(request.get_json())

#Homework Submissions
@app.route('/searchUserHW', methods=['POST', 'GET'])
@cross_origin()
def search_user():
  return db.search_user_hw(request.get_json())

#User CRUD
# @app.route('/showUser', methods=['GET'])
# def show_user():
#   return db.show_user()

# @app.route('/insertUser', methods=['POST'])
# def insert_user():
#   db.insert_user(request.get_json())
#   return db.show_user()

#Homework Submissions
# @app.route('/searchHWSubmission', methods=['POST'])
# def search_hw_sub(request.get_json()):
#   return None

# @app.route('/insertHWSubmission', methods=['POST'])
# def insert_hw_sub():
#   db.insert_hw_submission(request.get_json())
#   return db.show_user()

# @app.route('/updateHWSubmission', methods=['PUT'])
# def update_hw_sub():
#   db.update_hw_submission(request.get_json())
#   return db.show_user()

# @app.route('/deleteHWSubmission', methods=['DELETE'])
# def delete_hw_sub():
#   db.delete_hw_submission(request.get_json())
#   return db.show_user()


@app.route('/getBarGraphTest', methods=['GET'])
@cross_origin()
def get_bar_graph_test():
  bargraphtest.test()
  return "Bargraph generated"

@app.route('/getHW_MeansBarGraph', methods=['POST'])
@cross_origin()
def get_hw_means_bar_graph():
  data = request.get_json()
  bargraphs.get_hw_means(data['hw_id'])
  return "Bargraph generated"

@app.route('/getHW_Means', methods=['GET', 'POST'])
@cross_origin()
def get_hw_means():
  result = db.hw_question_means(request.get_json())
  return result

@app.route('/getHW_Mean', methods=['GET', 'POST'])
@cross_origin()
def get_hw_mean():
  result = db.hw_question_mean(request.get_json())
  return result

#Update Question Score
@app.route('/updateQuesScore', methods=['PUT'])
@cross_origin()
def update_ques_score():
  return db.update_ques_score(request.get_json())

#View Hw Score
@app.route('/viewTotalScore', methods=['GET', 'POST'])
@cross_origin()
def view_total_score():
  result = db.view_total_score(request.get_json())
  return result

if __name__ == '__main__':
  app.run(debug=True)