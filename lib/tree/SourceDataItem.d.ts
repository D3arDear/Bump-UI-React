interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

type TreeProps = {
  sourceData: SourceDataItem[];
} & (
  | { multiple: true; selected: string[]; onChange: (newSelected: string[]) => void }
  | { multiple: false; selected: string; onChange: (newSelected: string) => void }
);
