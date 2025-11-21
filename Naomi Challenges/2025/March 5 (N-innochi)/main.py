""" 
def customStartFib(startingNums,length):
    list = startingNums
    for x in range(len(startingNums),length):
        list.append(list[x - 1] + list[x - 2])
    return list 
 """

def customNFib(startingNums,length):
    list = startingNums.copy()
    nextNumber = 0
    for x in range(len(startingNums),length):
        for index in range(1,len(startingNums) + 1):
            nextNumber += list[x - index]
        list.append(nextNumber)
        nextNumber = 0
    return list  




print(customNFib([1,2,3,4],10))
