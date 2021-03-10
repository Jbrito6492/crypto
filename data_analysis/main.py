import sys
import numpy as np
from pandas_datareader import data as wb


def retrieve_simple_returns(ticker):
    Ticker = wb.DataReader(ticker, data_source='yahoo', start='2018-1-1')
    Ticker['simple_return'] = (
        Ticker['Adj Close'] / Ticker['Adj Close'].shift(1)) - 1
    avg_returns_a = Ticker['simple_return'].mean() * 365
    simple_returns[ticker] = str(round(avg_returns_a, 5) * 100) + '%'


simple_returns = {}

for t in sys.argv[1:]:
    retrieve_simple_returns(t)

print(simple_returns)
