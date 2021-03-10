import numpy as np
from pandas_datareader import data as wb
import matplotlib.pyplot as plt


def trackSimpleRateOfReturn(ticker='BTC-USD'):
    BTC = wb.DataReader('BTC-USD', data_source='yahoo', start='2015-1-1')
    BTC['simple_return'] = (BTC['Adj Close'] / BTC['AdjClose'].shift(1)) - 1
    return BTC['simple_return']
