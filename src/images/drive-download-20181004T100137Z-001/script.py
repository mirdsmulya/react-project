import os

#os.system('mkdir afteam')
#os.system('cd afteam')
os.system("ironic node-list | awk '{print $2;}' > uuid.txt")
os.system('echo "$(tail -n +4 uuid.txt)" > uuid.txt')

print "Creating IPMI Script"
#Create collect_ipmi.sh script
ipmi = open('collect_ipmi.sh', 'w+')
ipmi.close()
ipmi = open('collect_ipmi.sh', 'a+')

ipmi.write('#!bash/collect_ipmi.sh\n')
ipmi.write('filename="uuid.txt"\n')
ipmi.write('while read uuid ;do\n')
ipmi.write('ironic node-show $uuid | grep ipmi_address\n')
ipmi.write('done < $filename\n')
ipmi.close()

print "Creating UUID Script"
#Create collect_id.sh script
uid = open('collect_id.sh', 'w+')
uid.close()
uid = open('collect_id.sh', 'a+')

uid.write('#!bash/collect_id.sh\n')
uid.write('filename="uuid.txt"\n')
uid.write('while read uuid ;do\n')
uid.write('ironic node-show $uuid | grep instance_uuid\n')
uid.write('done < $filename\n')
uid.close()

print "Creating Merge Script"
#Create merge.sh script
merge = open('merge.sh', 'w+')
merge.close()
merge = open('merge.sh', 'a+')

merge.write('#!bash/merge.sh\n')
merge.write('paste -d@ ip.txt id.txt | while IFS="@" read -r f1 f2\n')
merge.write('do\n')
merge.write('echo  $f1 " " $f2\n')
merge.write('done\n')
merge.close()

print "Collecting Server List"
#Create merge.sh script
merge = open('list_server.txt', 'w+')
merge.close()
merge = open('list_server.txt', 'a+')

merge.write('Controller-0\n')
merge.write('Controller-1\n')
merge.write('Controller-2\n')
merge.write('Compute-0\n')
merge.write('Compute-1\n')
merge.write('Compute-10\n')
merge.write('Compute-2\n')
merge.write('Compute-3\n')
merge.write('Compute-4\n')
merge.write('Compute-5\n')
merge.write('Compute-6\n')
merge.write('Compute-7\n')
merge.write('Compute-8\n')
merge.write('Compute-9\n')
merge.write('Storage-0\n')
merge.write('Storage-1\n')
merge.write('Storage-2\n')
