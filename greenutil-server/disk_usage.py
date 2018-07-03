import time
import psutil

def interval():
    rcb = psutil.disk_io_counters().read_count
    wcb = psutil.disk_io_counters().write_count
    rbb = psutil.disk_io_counters().read_bytes
    wbb = psutil.disk_io_counters().write_bytes
    time.sleep(1)
    rca = psutil.disk_io_counters().read_count
    wca = psutil.disk_io_counters().write_count
    rba = psutil.disk_io_counters().read_bytes
    wba = psutil.disk_io_counters().write_bytes
    return {
        'read_count_per_sec': rca - rcb,
        'write_count_per_sec': wca - wcb,
        'read_bytes_per_sec': rba - rbb,
        'write_bytes_per_sec': wba - wbb
    }

def main():
    total = psutil.disk_usage('/').total
    used = psutil.disk_usage('/').used
    free = psutil.disk_usage('/').free
    percent = psutil.disk_usage('/').percent
    
    diskio = interval()
    read_count_per_sec = diskio['read_count_per_sec']
    write_count_per_sec = diskio['write_count_per_sec']
    read_Mbytes_per_sec = round(diskio['read_bytes_per_sec'] * 1e-3, 2)
    write_Mbytes_per_sec = round(diskio['write_bytes_per_sec'] * 1e-3, 2)

    print(f'read_count_per_sec: {read_count_per_sec}, write_count_per_sec: {write_count_per_sec}, read_Mbytes_per_sec: {read_Mbytes_per_sec}, write_Mbytes_per_sec: {write_Mbytes_per_sec}, total: {round(total * 1e-9, 2)}, free: {round(free * 1e-9, 2)}, used: {round(used * 1e-9, 2)}, percent: {round(percent)}')

if __name__ == '__main__':
    main()