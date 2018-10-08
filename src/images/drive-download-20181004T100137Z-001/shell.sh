echo "Collecting IPMI IP"
. collect_ipmi.sh | awk '{print $4}' > ip.txt
echo "Collecting UUID"
. collect_id.sh | awk '{print $4}' > id.txt

echo "Syncronize IP and UUID"
. merge.sh > merge.txt
nova list | awk '{print $2}' > nova.txt
echo "$(tail -n +4 nova.txt)" > nova.txt
