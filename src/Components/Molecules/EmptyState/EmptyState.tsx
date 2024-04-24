import EmptyStateStyle from "./EmptyStateStyle";
import emptyState from "../../../assets/no-data.jpg";

type EmptyStateProps = {
  header: string;
  text: string;
};

const EmptyState = ({ header, text }: EmptyStateProps) => {
  return (
    <EmptyStateStyle>
      <div className={`empty-state`}>
        <img src={emptyState} alt="empty-icon" />

        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </EmptyStateStyle>
  );
};

export default EmptyState;
