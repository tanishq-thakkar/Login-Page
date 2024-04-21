package com.example.demo.dbFunctions;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

	@Entity
	@Table(name = "login_users")
	public class Student {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;

		
		@Column(name = "email", unique = true, nullable = false)
		private String userEmail;
		
		@Column(name = "password")
		private String password;
		
		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getUserEmail() {
			return userEmail;
		}

		public void setUserEmail(String userEmail) {
			this.userEmail = userEmail;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		@Override
		public String toString() {
			return "Tutorial [id=" + id + ", email=" + userEmail + "]";
		}
	}

