import { styled } from "@stitches/react";

export const MainContainer = styled('div', {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '90vh',
    padding: '20px',
    color: 'white',
    textAlign: 'center'
})

export const ContentWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15vh'
})

export const Image = styled('img', {
    width: '120px',
    marginBottom: '24px'
})

export const Title = styled('h1', {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px',
})

export const Description = styled('p', {
    fontSize: '16px',
    maxWidth: '300px',
    marginBottom: '32px',
    lineHeight: 1.5
})