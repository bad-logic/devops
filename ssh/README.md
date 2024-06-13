variables resides in /etc/environment

session variable

myvar="hello"
echo $myvar

to make variable persistent add it to profile or environment

env => list all the environment variables available for the current user
export myvar="hello" => adds to the environment for the current session
unset myvar => remove from the environment

` ssh -l alil 165.232.187.175 -p 2218 alil`

STDIN, STDOUT, STDERR
echo "hello" > /dev/stdout
echo "hello" > /dev/null => if output is not required

useful for writing to syslogs

0 => stdin
1 => stdout
2 => stderr

echo "hello" >&2

[ 'hello' = 'hell' ] => string comparision
[ 1 eq 1 ] => numeric comparision

# check current user id

echo $UID

echo $? => check if the last command was successfully executed
1 => successfully executed otherwise no successfull
