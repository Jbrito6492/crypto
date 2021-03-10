import sys
import numpy as np
from pandas_datareader import data as wb
import datetime


tod = datetime.datetime.now()
d = datetime.timedelta(days=365)
a = tod - d


def retrieve_simple_returns(ticker):
    Ticker = wb.DataReader(ticker, data_source='yahoo', start=a)
    Ticker['simple_return'] = (
        Ticker['Adj Close'] / Ticker['Adj Close'].shift(1)) - 1
    avg_returns_d = Ticker['simple_return'].mean()
    avg_returns_d = round(avg_returns_a, 5) * 100
    simple_returns[ticker] = str(avg_returns_d) + '%'


simple_returns = {}

for t in sys.argv[1:]:
    retrieve_simple_returns(t)

print(simple_returns)
