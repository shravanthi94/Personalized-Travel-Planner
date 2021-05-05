import sys

def main(argv):
    if len(sys.argv) > 0:
        print( (["A", "B"]))
        sys.stdout.flush()
    else:
        print("Null")
        sys.stdout.flush()

if __name__ == "__main__":
   main(sys.argv)