import bargraphplotter
import db

def get_all_hw_means():
    hw_ids = db.get_hw_ids()
    all_hw_means = {}
    # for hw_id in hw_ids:
    #     all_hw_means[hw_id] = get_hw_means(hw_id)
    
    # bargraphplotter.save_bar_graph_as_png()

"""
result=[{'question_number': 1, 'AVG(question_score)': 17.374505928853754}, \
    {'question_number': 2, 'AVG(question_score)': 17.236166007905137}, {'question_number': 3, 'AVG(question_score)': 17.037549407114625}, {'question_number': 4, 'AVG(question_score)': 17.09090909090909}]
"""
def get_hw_means(hw_id):
    result = db.hw_question_means_list(hw_id)
    tick_label = [x['question_number'] for x in result]
    height = [x['AVG(question_score)'] for x in result]
    output_file = f'../../frontend/public/images/hw_means_{hw_id}.png'
    x_label = 'Question Number'
    y_label = 'Mean Score'
    title = 'Problem Breakdown'
    bargraphplotter.save_bar_graph_as_png(tick_label, height, output_file, x_label=x_label, y_label=y_label, title=title)
