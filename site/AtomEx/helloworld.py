#first ex
print "hello world"

#ex two
hrs = raw_input("Enter Hours:")
h = float(hrs)
rate = raw_input("Enter Hours:")
r = float(rate)
ot_r = 1.5 * r
if( h > 40):
    ot = h-40
    pay = (40*r)+(ot*ot_r)

else: pay = h * r
print pay


#ex three
score = raw_input("Enter Score: ")
if (score < 0 and score > 1):
    print "Oops"

else: s = float(score)

if ( s >= 0.9):
    print "A"
elif(s>=0.8):
    print "B"
elif(s>= 0.7):
    print "C"
elif( s>= 0.6):
    print "D"
else: print "F"
