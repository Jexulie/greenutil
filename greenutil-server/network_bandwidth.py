import time
import psutil

def byte_to_Mb(v):
    # byte -> bit
    return (v * 8) * 1e-6

def interval():
    s_before = psutil.net_io_counters().bytes_sent
    r_before = psutil.net_io_counters().bytes_recv
    time.sleep(1)
    s_after = psutil.net_io_counters().bytes_sent
    r_after = psutil.net_io_counters().bytes_recv
    return {
        'sps': s_after - s_before,
        'rps': r_after - r_before
    }

def main():
    avg = interval()
    sent = byte_to_Mb(avg['sps'])
    recieved = byte_to_Mb(avg['rps'])
    print(f'Sent: {sent:.3f} Mbps - Recieved: {recieved:.3f} Mbps')

if __name__ == '__main__':
    main()