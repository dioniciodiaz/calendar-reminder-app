import styled from "styled-components"

export const CalendarWrapper = styled.table`
	margin: 0 auto;
	border-collapse: collapse;
  table-layout: auto;
`;

export const DayName = styled.th`
	width: 160px;
	color: #feffff;
	border: 1px solid #2e75b3;
	background-color: #2e75b3;
	font-weight: bold;
`;


export const MonthWrapper = styled.tbody`
`;

export const WeekWrapper = styled.tr`
`;

export const DayWrapper = styled.div`
  min-height: 7.5rem;
  font-size: 1.1rem;
  flex: 1;
  border-radius: 3px;
  background-color: ${props =>
    props.nodate ? 'rgba(27, 20, 100, .2)' : '#ecf0f1'};
  margin: 2px;
  position: relative;
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: row;
`;
export const DayHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DayNumber = styled.div`
  margin-left: 5px;
  color: ${props =>
    props.isCurrentDay ? '#f85050' : '#000000'}
`;


export const header = styled.div`
  color: ${props =>
    props.isCurrentDay ? '#f85050' : '#000000'};
`;

export const Reminders = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  padding: 2px;
  width: 100%;
`;


export const AddButton = styled.button`
  background-color: #1b1464;
  border-radius: 50%;
  font-size: 1.5rem;
  height: 28px;
  margin: 0 2px;
  width: 26px;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  display: flex;
  border: none;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const DeleteButton = styled(AddButton)`
  background-color: #f85050;
`;

export const Reminder = styled.div`
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : `1.1rem`)};
  background-color: ${props => props.color};
  color: #ecf0f1;
  border-radius: 3px;
  padding: 4px;
  margin-bottom: 1px;
  ${props => (props.padding ? `padding: ${props.padding}rem` : null)};
`;

export const ReminderText = styled.span``;
