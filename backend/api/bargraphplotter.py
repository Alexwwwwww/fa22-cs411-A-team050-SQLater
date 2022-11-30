import matplotlib.pyplot as plt
import db
import os

# Should have parameters tick_label, height, x_axis, y_axis, title, outfile
def save_bar_graph_as_png(tick_label, height, output_file, x_label = '', y_label = '', title = ''):  
    plt.switch_backend('agg')
    # x-coordinates of left sides of bars
    left = list(range(1, len(tick_label) + 1))

    plt.bar(left, height, tick_label = tick_label,
            width = 0.8, color = ['red', 'green'])

    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.title(title)

    plt.savefig(output_file)

def __init__():
    pass
