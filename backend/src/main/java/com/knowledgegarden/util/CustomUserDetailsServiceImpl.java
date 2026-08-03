package com.knowledgegarden.util;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.knowledgegarden.entity.User;
import com.knowledgegarden.repository.UserRepository;

import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CustomUserDetailsServiceImpl implements UserDetailsService{

	private final UserRepository userRepository;
	@Override
	
		public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
			User user=userRepository.findByEmail(email)
					.orElseThrow(() -> new UsernameNotFoundException("User by email not found !!!!!"));		
			//=> user by email exists -> create UserDetails object -load user details lifted from DB
			return new CustomUserDetailsImpl(user.getId(), user.getName(), user.getEmail(),
					user.getPassword(), user.getRole());
	}

}
