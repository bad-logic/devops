auth-request [ 200 success; else fail]

example client fetch/users-list => request => proxy => sends to auth service => gets 200 then goes to users service to extract users list; else returns fail response
