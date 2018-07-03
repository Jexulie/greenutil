import time
import psutil

def interval_percent():
    before_p = psutil.cpu_percent(percpu=False)
    time.sleep(1)
    after_p = psutil.cpu_percent(percpu=False)
    return after_p

def interval_freq():
    before_f = psutil.cpu_freq(percpu=False).current
    time.sleep(1)
    after_f = psutil.cpu_freq(percpu=False).current
    return after_f

def main():
    count = psutil.cpu_count(logical=False)
    current_freq = interval_freq()
    current_percent = interval_percent()
    print(f'cpu_count: {count}, cpu_percent: {current_percent}, cpu_freq: {current_freq}')
    
if __name__ == '__main__':
    main()


