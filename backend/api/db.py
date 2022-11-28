import mysql.connector
from flask import jsonify

def open_connection():
  mydb = mysql.connector.connect(
      host="34.132.218.225",
      user="root",
      password="sqlater1234",
      database="sqlater"
  )
  mydb.autocommit = True
  return mydb

def is_connection_open():
  try:
    open_connection()
  except Exception as e:
    print('=====')
    print(type(e))
    print('=====')
    return jsonify(False)
  return jsonify(True)

#Homework Assignment CRUD
def insert_hw_assignment(data):
  #MAKE INTO AUTOINCREMENT later
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("INSERT INTO Homework_Assignments(hw_id, hw_name) VALUES (%s, %s)", (data["hw_id"], data["hw_name"]))
  cursor.close()
  mydb.close()
  return 'INSERTED HW ASSIGNMENT'

def update_hw_title(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("UPDATE Homework_Assignments SET hw_name=%s WHERE hw_id=%s", (data['hw_name'], data['hw_id']))
  cursor.close()
  mydb.close()
  return 'UPDATED HW TITLE'

def delete_hw_assignment(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  #Execute must take in a tuple so (), needed
  cursor.execute("DELETE FROM Homework_Assignments WHERE hw_id=%s", (data['hw_id'],))
  cursor.close()
  mydb.close()
  return 'DELETED HW ASSIGNMENT'

def get_avg_score_by_question_hw_ga():
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("""
    SELECT ga_name as 'as_name', question_number, ROUND(AVG(question_score),1) as avg_score
    FROM GA_Questions NATURAL JOIN GA_Assignments
    GROUP BY ga_id, question_number
    UNION
    SELECT hw_name as 'as_name', question_number, ROUND(AVG(question_score), 1) as avg_score
    FROM Homework_Questions NATURAL JOIN Homework_Assignments
    GROUP BY hw_id, question_number
  """)
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  res = jsonify(result)
  cursor.close()
  mydb.close()
  return res

def get_uin_overall_grade(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("""
    SELECT t1.uin as uin, t2.name as name, ROUND(t1.avg_ga_score, 1) as avg_ga_score, ROUND(t2.avg_hw_score,1) as avg_hw_score, ROUND((t1.avg_ga_score + t2.avg_hw_score)*0.5,1) as total_score
    FROM (SELECT uin, (AVG(score)*2) avg_ga_score
          FROM GA_Submissions NATURAL JOIN GA_Group_Members
          WHERE ga_id IN (0,1)
          GROUP BY uin) AS t1
    JOIN (SELECT h.uin as uin, s.name as name, (AVG(h.score) + 8) avg_hw_score
          FROM Homework_Submissions h NATURAL JOIN Students s
          WHERE h.hw_id IN (0,1)
          GROUP BY h.uin) AS t2 ON (t1.uin = t2.uin)
    WHERE (t1.avg_ga_score + t2.avg_hw_score)*0.5 >= %s
    ORDER BY total_score DESC
    LIMIT 25
  """, (data['min_grade'],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  print(user_grades)
  cursor.close()
  mydb.close()
  return user_grades

def search_user_hw(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT * FROM Homework_Submissions WHERE uin=%s", (data["uin"],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  cursor.close()
  mydb.close()
  return user_grades

def show_hw_assignment():
  mydb = open_connection()
  query = ("SELECT * FROM Homework_Assignments")
  cursor = mydb.cursor()
  cursor.execute(query)
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  assignments = jsonify(result)
  cursor.close()
  mydb.close()
  return assignments
  
def search_user_hw(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT * FROM Homework_Submissions WHERE uin=%s", (data["uin"],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  user_grades = jsonify(result)
  cursor.close()
  mydb.close()
  return user_grades

#Students CRUD
def show_user():
  mydb = open_connection()
  query = ("SELECT * FROM Students LIMIT 10")
  cursor = mydb.cursor()
  cursor.execute(query)
  result = cursor.fetchall()
  users = jsonify(result)
  cursor.close()
  mydb.close()
  return users

def insert_user(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("INSERT INTO Students(uin, net_id, name) VALUES (%s, %s, %s)", (data["uin"], data["net_id"], data["name"]))
  cursor.close()
  mydb.close()
  return 'INSERTED USER'

def hw_question_means(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT question_number, AVG(question_score) FROM Homework_Submissions NATURAL JOIN Homework_Questions WHERE hw_id = %s GROUP BY question_number", (data["hw_id"],))
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  means = jsonify(result)
  cursor.close()
  mydb.close()
  return means

def hw_question_mean(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT question_number, AVG(question_score) FROM Homework_Submissions NATURAL JOIN Homework_Questions WHERE hw_id = %s AND question_number = %s", (data["hw_id"], data["question_number"]))
  result = cursor.fetchall()
  mean = jsonify(result)
  cursor.close()
  mydb.close()
  return mean

