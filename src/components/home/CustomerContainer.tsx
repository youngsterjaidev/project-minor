import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Illustrations } from "../../assets";
import axios from "axios"
import { typeScale } from "../../utils";
import {UnknownProps} from "@react-spring/web";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 1em 2em;

  @media (max-width: 500px) {
    padding: 1em 0.5em;
  }
`;

const ContainerWrapper = styled.div`
  width: 100%;
`;

const Heading = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: ${typeScale.header4};
  color: ${(props) => props.theme.textColor};
  text-align: center;
  line-height: 29px;
`;

const SubHeading = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: ${typeScale.header5};
  color: ${(props) => props.theme.textColor};
  line-height: 23px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1em;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Card = styled.div`
  width: 50%;
  position: relative;
  min-height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1em 2em;
  background-color: ${(props) => props.theme.color};
  box-shadow: 0px 0px 20px ${(props) => props.theme.boxShadow};
  /* box-shadow: 0px 0px 20px rgba(163, 163, 163, 0.25); */
  margin: 0em 1em;

  @media (max-width: 500px) {
    width: 100%;
    min-height: 200px;
    padding: 0.5em;
    margin: 0em 1em 0em 0em;
  }
`;

const Rating = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  color: ${(props) => props.theme.textColor};
	display: flex;
	place-items: center;

	& > svg {
    fill: ${(props) => props.theme.textColor};
    cursor: pointer;
		width: 25px;
		height: 25px;
  }
`;

const CardImage = styled.div`

`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const CardBody = styled.div`
  padding: 1em;
  word-break: break-all;
  color: ${(props) => props.theme.textColor};

  @media (max-width: 500px) {
    padding: 0.5em;
  }
`;

const dummyData: CustomerData[] = [
	{
		image: Illustrations.Dog,
		content: "If you don't appreciate your customers, someone else will. A customer talking about their experience with you is worth ten times that which you write or say about yourself.",
		rating: 2,
	},
	{
		image: Illustrations.Dog,
		content: "If you don't appreciate your customers, someone else will. A customer talking about their experience with you is worth ten times that which you write or say about yourself.",
		rating: 2,
	}
]

interface CustomerData {
	image: string,
	content: string,
	rating: number
}


export const CustomerContainer = () => {
	const [data, setData] = useState<CustomerData[]| any>(dummyData)

	// fetch the customer review data
	const fetchReviews = async () => {
		try {
			let res  = await axios({
				url: "",
				method: "GET",
				headers: {
					"x-auth-key": "something"
				}
			})

			if(res.status === 200) {
				setData(res.data)
			}

			console.log("Failed to fetch the reviews")
		} catch(e) {
			console.error("Error Occured while fetching the review data from the server", e)
		}
	}

	useEffect(() => {
		//fetchReviews()
	}, [])

  return (
    <Container>
      <ContainerWrapper>
        <Heading>Customer Review </Heading>
        <SubHeading>What Customer Say About Us</SubHeading>
        <Wrapper>
					{data.map((item) => (
						<Card key={item.id}>
            <CardImage>
              <Image src={item.image} alt="" />
            </CardImage>
            <CardBody>{item.content}</CardBody>
            <Rating>
							<div>{item.rating}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </Rating>
          </Card>
					))}
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};
