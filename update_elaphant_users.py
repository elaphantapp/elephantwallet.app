import requests
import urllib2
import json
import time



def http_get_request(url):
    response = requests.get(url, verify=True)
    if response.status_code == 200:
        return response.json()
    else:
        return ''


stat = {}

def get_users(page, size):
    url = 'https://api-explorer.elaphant.app/api/2/didexplorer/property?key=PublicKey&page='+str(page)+'&size='+str(size)
    response = http_get_request(url)

    if response != '':
        global stat
        result_data = response['data']

        for i in result_data:
            k = int(i['blockTime']/86400)*86400000
            v = stat.get(k, 0)
            stat[ k ] = v + 1;
        return len(stat)
    else :
        return -1


def update():

    output = './elaphant_users.js'
    page = 0
    size = 1000

    while 1:
        ret = get_users(page, size)
#        if ret <= 0:
        break
        page += 1

    l = [list(e) for e in stat.items()]

    s = []
    t = 0
    for e in l:
        t += int(e[1]);
        s.append([e[0],t])

    data = 'var users = ' + str(l) + ';'
    data += '\nvar sums = ' + str(s) + ';'
    

    jsfile = open(output, "w+")
    jsfile.write(data)
    jsfile.close()
   


if __name__ == '__main__':
    update()

