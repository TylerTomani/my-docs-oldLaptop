from argparse import ArgumentParser

parser = ArgumentParser()

parser.add_argument('--output','-o',required=True,help='ouputfile name required')
parser.add_argument('--input','-i',required=True,help='add text to file')

args = parser.parse_args()

with open(args.output, 'w') as f:
    f.write(args.input)


print(f'The file: "{args.output}" has the following text \n"{args.input}"')

