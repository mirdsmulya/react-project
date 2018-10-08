import os

#ip = open('ip.txt', 'r')
nova = open('nova.txt', 'r')
result = open('result.txt', 'w+')
result.close()
#merge = open('merge.txt', 'r')


for nova_loop in nova:
    #print '-------------------'
    #print nova_loop + "start"
    #print '-------------------'
    id = open('id.txt', 'r')
    iter=0
    for id_loop in id:
        if nova_loop == id_loop:
            merge = open('merge.txt', 'r')
            #result = open('result.txt', 'w+')
            #result.close()
            result = open('result.txt', 'a')
            merge = merge.readlines()
            #print merge[iter]
            if iter == 16:
                #print iter
                result.write(merge[iter])
                #print merge[iter]
            else:
                result.write(merge[iter])
            #iter = iter + 1
        else:
            #print "lose"
            #print iter
            iter = iter + 1
loop =0
final_result = open('final_result.txt', 'w+')
final_result.close()
final_result = open('final_result.txt', 'a')
final_result.write("-------------------------- Result --------------------------\n")
for line in range(0,17):
    result = open('result.txt', 'r')
    list_server = open('list_server.txt', 'r')
    list_server = list_server.readlines()
    result = result.readlines()
    #final_result = open('final_result.txt', 'a')
    final_result.write(result[loop])
    final_result.write(list_server[loop])
    final_result.write("-----------------------------------------------------------\n")
    loop = 1 + loop

print " "
print 'Data Processing Succeed!'
print " "
os.system('echo "******************* Finished! *******************"')
#os.system('cat final_result.txt')
