import sys
import numpy as np
from pandas_datareader import data as wb
import json
import datetime


tod = datetime.datetime.now()
d = datetime.timedelta(days=365)
a = tod - d

log_returns = []


def retrieve_log_returns(t):
    t_return = {}
    Ticker = wb.DataReader(t, data_source="yahoo", start=a)
    Ticker["log_return"] = (
        Ticker["Adj Close"] / Ticker["Adj Close"].shift(1))
    avg_returns_d = Ticker["log_return"].mean()
    t_return[t] = "{s_return:.5f}%".format(s_return=avg_returns_d * 100)
    log_returns.append(t_return)


for t in sys.argv[1:]:
    retrieve_log_returns(t)

print(json.dumps(log_returns))
