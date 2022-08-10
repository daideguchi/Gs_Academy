from flask import Flask, render_template, make_response
from io import BytesIO
import urllib
from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
import matplotlib.pyplot as plt

import random
import numpy as np


app = Flask(__name__)

fig = plt.figure(figsize=[16, 4])
ax1 = fig.add_subplot(1, 2, 1)
ax2 = fig.add_subplot(1, 2, 2)


x = np.arange(0, 10, 0.1)
y1 = x**2
y2 = np.sin(x)


@app.route('/')
def index():
  plt.cla()

  fig.suptitle('figure title', fontsize=24)

  ax1.set_title('Graph1')
  ax1.grid()
  ax1.set_xlabel('x', fontsize=16)
  ax1.set_ylabel('y1', fontsize=16)
  ax1.plot(x, y1)

  ax2.set_title('Graph2')
  ax2.grid()
  ax2.set_xlabel('x', fontsize=16)
  ax2.set_ylabel('y2', fontsize=16)
  ax2.plot(x, y2)

  canvas = FigureCanvasAgg(fig)
  png_output = BytesIO()
  canvas.print_png(png_output)
  data = png_output.getvalue()

  response = make_response(data)
  response.headers['Content-Type'] = 'image/png'

  return response


if __name__ == "__main__":
  app.run()
















# from flask import Flask
# from matplotlib.backends.backend_agg import FigureCanvasAgg
# from pandas_datareader import data
# from flask import Flask
# import pandas as pd
# import matplotlib.pyplot as plt
# import numpy as np
# get_ipython().run_line_magic('matplotlib', 'inline')
# pd.core.common.is_list_like = pd.api.types.is_list_like
# app = Flask(__name__)




# @app.route('/')
# def hello():

#     # def company_stock(start, end, company_code):
#     df = data.DataReader("9984", "stooq")
#     df[(df.index >= "2019-06-01") & (df.index <= "2020-06-01")]

#     date = df.index
#     price = df["Close"]

#     span01 = 5
#     span02 = 25
#     span03 = 50

#     df["sma01"] = price.rolling(window=span01).mean()
#     df["sma02"] = price.rolling(window=span02).mean()
#     df["sma03"] = price.rolling(window=span03).mean()

#     plt.figure(figsize=(20, 10))
#     plt.subplot(2, 1, 1)

#     plt.plot(date, price, label="close", color="#99b898")
#     plt.plot(date, df["sma01"], label="sma01", color="#e84a5f")
#     plt.plot(date, df["sma02"], label="sma02", color="#ff847c")
#     plt.plot(date, df["sma03"], label="sma03", color="#feceab")
#     plt.legend()

#     plt.subplot(2, 1, 2)
#     plt.bar(date, df["Volume"], label="volume", color="grey")
#     plt.legend()

#     canvas = FigureCanvasAgg(fig)
#     png_output = BytesIO()
#     canvas.print_png(png_output)
#     data = png_output.getvalue()

#     response = make_response(data)
#     response.headers['Content-Type'] = 'image/png'
 

#   return response

#     # company_stock("2019-06-01", "2020-06-01", "6502.JP")


# if __name__ == "__main__":
#     app.run()
