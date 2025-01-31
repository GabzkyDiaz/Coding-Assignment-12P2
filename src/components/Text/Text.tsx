import styled from 'styled-components';

export interface TextProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  visible?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  fontColor?: string;
}

interface StyledTextProps {
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  fontColor?: string;
}

const StyledText = styled.span<StyledTextProps>`
  font-size: ${(props) => {
    if (props.size === 'large') return '24px';
    if (props.size === 'medium') return '16px';
    return '12px';
  }};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  color: ${(props) => props.fontColor || 'black'};

  @media (max-width: 1024px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '20px';
      if (props.size === 'medium') return '14px';
      return '10px';
    }};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '18px';
      if (props.size === 'medium') return '12px';
      return '8px';
    }};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => {
      if (props.size === 'large') return '16px';
      if (props.size === 'medium') return '10px';
      return '6px';
    }};
  }
`;

export const Text: React.FC<TextProps> = ({ text, size, bold, visible = true, backgroundColor, disabled, fontColor }) => {
  if (!visible) return null;
  return <StyledText size={size} bold={bold} backgroundColor={backgroundColor} disabled={disabled} fontColor={fontColor}>{text}</StyledText>;
};
