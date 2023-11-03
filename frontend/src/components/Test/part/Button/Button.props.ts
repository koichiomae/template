import { ButtonProps } from './';
const defaultProps: ButtonProps = {
  text: 'text',
  onClick: () => {
    console.log('test');
  },
}; /** * const propObj への補足。 * propObj
の中身が3つ以上になる場合、以下のように書くと便利です。 *
使わないときはこのコメントアウト部分は削除してください。 */ /*interface PropObj { default:
ButtonProps; pattern1(適宜名称を変えてください):
ButtonProps; pattern2:
ButtonProps; ... } export const propObj: PropObj = { default: defaultProps,
pattern1(適宜名称を変えてください): pattern1Props; pattern2: pattern2Props; ... }*/
export const propObj: { [key: string]: ButtonProps } = { default: defaultProps };
