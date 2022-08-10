#!/usr/bin/env python
# coding: utf-8

# In[4]:


from pandas_datareader import data
from flask import Flask
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
get_ipython().run_line_magic('matplotlib', 'inline')
pd.core.common.is_list_like = pd.api.types.is_list_like
app = Flask(__name__)

# In[5]:

@app.route('/')
def hello():
    name = "hello World"
    return name

def company_stock(start,end,company_code):
    df = data.DataReader(company_code, "stooq")
    df[(df.index>=start) & (df.index<=end)]

    date=df.index
    price=df["Close"]

    span01=5
    span02=25
    span03=50

    df["sma01"]=price.rolling(window=span01).mean()
    df["sma02"]=price.rolling(window=span02).mean()
    df["sma03"]=price.rolling(window=span03).mean()

    plt.figure(figsize=(20,10))
    plt.subplot(2,1,1)

    plt.plot(date,price,label="close",color="#99b898")
    plt.plot(date,df["sma01"],label="sma01",color="#e84a5f")
    plt.plot(date,df["sma02"],label="sma02",color="#ff847c")
    plt.plot(date,df["sma03"],label="sma03",color="#feceab")
    plt.legend()

    plt.subplot(2,1,2)
    plt.bar(date,df["Volume"],label="volume",color="grey")
    plt.legend()


# In[6]:


company_stock("2019-06-01","2020-06-01","4385.JP")


# In[ ]:




