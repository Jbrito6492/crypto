import sys
import numpy as np
from pandas_datareader import data as wb
import matplotlib.pyplot as plt

BTC = wb.DataReader('BTC-USD', data_source='yahoo', start='2015-1-1')
BTC['simple_return'] = (BTC['Adj Close'] / BTC['Adj Close'].shift(1)) - 1
print(BTC['simple_return'])
