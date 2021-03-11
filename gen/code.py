for i in range(1, 26) :
    print("img:nth-child(" + str(i) + ") {");
    print("  animation-delay: " + str((i*2)-2) + "s;");
    print("}");


#img:nth-child(1) {
#  animation-name: show, wait, hide, wait;
#  animation-delay: 0s, 2s, 4s, 6s;
#}
