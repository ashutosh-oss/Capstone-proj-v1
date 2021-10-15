FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL=mongodb+srv://Ashutosh2001:Ashutoshsk321@zomatomasterproject.k5biv.mongodb.net/ZomatoMasterProject?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=449485542923-rs6gkp9agp41buh0h0f82d2tv8g8hnha.apps.googleusercontent.com
ENV GOOGLE_SECRETKEY=AICXC71cOLMegXentMLCdYU1
ENV AWS_S3_ACCESS_KEY=AKIAVWPBQ5M42OY6P5IO
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__DOMAIN=sandbox699c43aa0b1446568facc99fcc8df4c7.mailgun.org
ENV MAILGUN__API__KEY=0fd3de3598a2a0e6d951fb32183579a8-45f7aa85-1e6bf83b
ENV RAZOR_ID=rzp_test_Od0p6TCqASqHOX
ENV RAZOR_SECRET=XlUYqLPdONqaINcInyZPxNMX

CMD ["npm","run","start"]