require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe '#create' do
    context 'with valid attributes' do
      let!(:user_params) { attributes_for(:user) }

      it 'creates an user' do
        expect do
          post :create, params: { user: user_params }
        end.to change { User.count }.by(1)
      end

      it 'returns the user' do
        post :create, params: { user: user_params }
        expect(JSON.parse(response.body).keys).to eq %w[id email]
      end
    end

    %i[email password password_confirmation].each do |attribute|
      context "without #{attribute} attributes" do
        let!(:user_params) { attributes_for(:user, attribute => nil) }

        it 'creates an user' do
          expect do
            post :create, params: { user: user_params }
          end.to_not(change { User.count })
        end
      end
    end
  end

  describe '#me' do
    context 'without tokens' do
      before { get :me }

      it 'returns not_authenticated' do
        expect(response).to have_http_status(:unauthorized)
      end
    end

    context 'with token' do
      let!(:user) { create(:user) }

      before { get :me, params: { access_token: user.access_token } }

      it 'returns ok' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the current_user' do
        expect(JSON.parse(response.body).symbolize_keys).to eq(UserSerializer.new(user).as_json)
      end
    end
  end

  describe '#authenticate' do
    context 'with credentials' do
      let!(:user) do
        create(:user, password: 'some_password',
                      password_confirmation: 'some_password')
      end

      before do
        post :authenticate, params: { user: { email: user.email, password: 'some_password' } }
      end

      it 'returns ok' do
        expect(response).to have_http_status(:ok)
      end

      it 'returns the access token' do
        expect(JSON.parse(response.body)).to eq('access_token' => user.access_token)
      end
    end
  end
end
