import { Component } from '@angular/core';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const submitRepository = gql`
mutation submitRepository {
  submitRepository(repoFullName: "apollographql/apollo-client") {
    createdAt
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor( apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/cj1dk7m2nmfl00113c368h1q0'}),
      cache: new InMemoryCache()
    });

    // make a request
    apollo.query({query: gql`{ allProducts {id, createdAt, name, description} }`}).subscribe(console.log);
  }
  getProducts(){
    console.log('get');
    
  }
  title = 'app';
  messages = ['One', 'Second'];
}
