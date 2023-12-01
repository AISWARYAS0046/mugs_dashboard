import styled from 'styled-components';

// export const BackgroundImageContainer = styled.div`
//   background-image: url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600');
 
// `;

export const Styles = styled.div`
  padding: 1rem;
  

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
