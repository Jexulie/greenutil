import time
import psutil

def main():
    total_m = psutil.virtual_memory().total
    available_m = psutil.virtual_memory().available
    used_m = psutil.virtual_memory().used
    used_m_in_per = psutil.virtual_memory().percent
    free_m = psutil.virtual_memory().free
    
    print(f'total: {round(total_m * 1e-9, 1)}, available: {round(available_m * 1e-9, 1)}, free: {round(free_m * 1e-9, 1)}, used: {round(used_m * 1e-9, 1)}, used_in_percent: {used_m_in_per}')

if __name__ == '__main__':
    main()