package io.project.webapi.webservices.restfulwebservices.auth;

import org.springframework.boot.autoconfigure.security.servlet.WebSecurityEnablerConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationAuth extends WebSecurityEnablerConfiguration{

	
	protected void configure( HttpSecurity http )throws Exception{
		http.csrf().disable().authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.anyRequest().authenticated()
				.and()
			.httpBasic();
	}
}
