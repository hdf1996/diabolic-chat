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
        expect(JSON.parse(response.body).keys).to eq %w[id email created_at]
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

      before { get :me }

      it 'returns ok' do
        expect(response).to have_http_status(:ok)
      end
    end
  end
end
