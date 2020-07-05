for i in range(2, 26) :
    print("img:nth-child(" + str(i) + ") {");
    print("  animation-delay: " + str((i*2)-2) + "s;");
    print("}");
