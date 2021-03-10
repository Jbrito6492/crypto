import sys
import numpy as np
from pandas_datareader import data as wb
import json
import datetime


tod = datetime.datetime.now()
d = datetime.timedelta(days=365)
a = tod - d


def retrieve_simple_returns(t):
    Ticker = wb.DataReader(t, data_source="yahoo", start=a)
    Ticker["simple_return"] = (
        Ticker["Adj Close"] / Ticker["Adj Close"].shift(1)) - 1
    avg_returns_d = Ticker["simple_return"].mean()
    simple_returns[t] = "{s_return:.5f}%".format(s_return=avg_returns_d * 100)


simple_returns = {}

for t in sys.argv[1:]:
    retrieve_simple_returns(t)

print(json.dumps(simple_returns))
