import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #111;
  padding: 30px;
  border-top: 3px solid #333;
`;

const FeedbackTitle = styled.h3`
  color: #2ecc71; /* Yaşıl başlıq */
  font-size: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const FeedbackWrapper = styled.div`
  border: 2px solid #2ecc71; 
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CommentCard = styled.div`
  background-color: #222;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #2ecc71;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
  margin-bottom: 5px;
`;

export class Footer extends Component {
  feedbacks = [
    { id: 1, user: "Sementha Maxilla", comment: "A grate film", rate: "⭐⭐⭐⭐⭐" },
    { id: 2, user: "Tom Harry.", comment: "I expected something more", rate: "⭐⭐⭐" },
    { id: 3, user: "John Doe", comment: "This ste flow is excellent", rate: "⭐⭐⭐⭐⭐" }
  ];

  render() {
    return (
      <FooterContainer>
        <FeedbackWrapper>
          <FeedbackTitle>💬 The Feedbacks About Cinema</FeedbackTitle>
          {this.feedbacks.map((item) => (
            <CommentCard key={item.id}>
              <UserInfo>
                <strong>{item.user}</strong>
                <span>{item.rate}</span>
              </UserInfo>
              <p style={{ color: "#fff", margin: 0 }}>{item.comment}</p>
            </CommentCard>
          ))}
        </FeedbackWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
