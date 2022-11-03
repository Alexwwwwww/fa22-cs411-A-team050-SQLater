#main.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
  return 'HOME PAGE'

# @app.route('/insertUser', methods=['POST'])
# def add_songs():
#     user_info = request.get_json()
#     #INSERT into Database
#     return 'DONE'

if __name__ == '__main__':
  app.run()