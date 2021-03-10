import sys
import numpy as np
from pandas_datareader import data as wb


BTC = wb.DataReader('BTC-USD', data_source='yahoo', start='2018-1-1')
BTC['simple_return'] = (BTC['Adj Close'] / BTC['Adj Close'].shift(1)) - 1
avg_returns_a = BTC['simple_return'].mean() * 365
print(str(round(avg_returns_a, 5) * 100) + '%')
