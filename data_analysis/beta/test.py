import sys
import numpy as np
import pandas as pd
from pandas_datareader import data as wb
import json
import datetime

tod = datetime.datetime.now()
d = datetime.timedelta(days=1825)
a = tod - d


def calculate_beta(t):
    tickers = [t, 'BITW']
    data = pd.DataFrame()
    for t in tickers:
        data[t] = wb.DataReader(t, data_source='yahoo', start=a)['Adj Close']
    sec_returns = np.log(data / data.shift(1))
    cov = sec_returns.cov() * 365
    cov_with_market = cov.iloc[0, 1]
    market_var = sec_returns['BITW'].var() * 365
    t_beta = cov_with_market / market_var
    print("%.5f" % t_beta)


calculate_beta(sys.argv[1])
