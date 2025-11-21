def gradePr(scores,average): 
  total = average * (len(scores) + 1)
  for score in scores:
    total = total - score 
  return total 

print(gradePr([86,77,48,52,90,73,44,99],85))
  