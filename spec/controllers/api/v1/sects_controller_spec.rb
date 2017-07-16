# require 'rails_helper'
#
# RSpec.describe Api::V1::SectsController, type: :controller do
#   describe '#chat' do
#     context 'without a valid token' do
#       let!(:sect) { create(:sect, max_size: 10) }
#
#       before { post :chat, params: { id: sect.id } }
#
#       it 'returns 401' do
#         expect(response).to have_http_status(:unauthorized)
#       end
#     end
#
#     context 'with a valid token' do
#       let!(:user) { create :user }
#
#       context 'with a valid sect' do
#         let!(:sect) { create :sect }
#
#         context 'being in the sect' do
#           before { create(:sect_subscription, user: user, sect: sect) }
#
#           context 'with a valid message' do
#             let!(:message_attributes) { attributes_for(:message, sect: sect) }
#
#             it 'creates a new message' do
#               expect do
#                 post :chat, params: { id: sect.id, access_token: user.access_token,
#                                       message: message_attributes }
#               end.to change { Message.count }.by(1)
#             end
#           end
#         end
#       end
#     end
#   end
#
#   describe '#subscribe' do
#     context 'without a valid token' do
#       let!(:sect) { create(:sect, max_size: 10) }
#
#       before { post :subscribe, params: { id: sect.id } }
#
#       it 'returns 401' do
#         expect(response).to have_http_status(:unauthorized)
#       end
#     end
#
#     context 'with a valid token' do
#       let!(:user) { create :user }
#       context 'with an invalid sect' do
#         it 'does not create a new sect_subscription' do
#           expect do
#             post :subscribe, params: { id: 1, access_token: user.access_token }
#           end.to_not(change { user.reload.sects.count })
#         end
#
#         it 'returns not_found' do
#           post :subscribe, params: { id: 1, access_token: user.access_token }
#           expect(response).to have_http_status(:not_found)
#         end
#       end
#
#       context 'with a full sect' do
#         let!(:sect) { create(:sect, max_size: 10) }
#         let!(:sect_subscriptions) { create_list(:sect_subscription, 10, sect: sect) }
#
#         before { sect_subscriptions }
#
#         it 'does not create a new sect_subscription' do
#           expect do
#             post :subscribe, params: { id: sect.id, access_token: user.access_token }
#           end.to_not(change { user.reload.sects.count })
#         end
#
#         it 'returns not acceptable' do
#           post :subscribe, params: { id: sect.id, access_token: user.access_token }
#           expect(response).to have_http_status(:not_acceptable)
#         end
#       end
#
#       context 'with a valid sect' do
#         let!(:sect) { create :sect }
#
#         context 'without being in the sect' do
#           it 'creates one sect_subscription' do
#             expect do
#               post :subscribe, params: { id: sect.id, access_token: user.access_token }
#             end.to change { user.reload.sects.count }.by(1)
#           end
#
#           it 'returns :created' do
#             post :subscribe, params: { id: sect.id, access_token: user.access_token }
#             expect(response).to have_http_status(:created)
#           end
#         end
#
#         context 'being in the sect' do
#           before { create(:sect_subscription, user: user, sect: sect) }
#
#           it 'does not create a new sect subscription' do
#             expect do
#               post :subscribe, params: { id: sect.id, access_token: user.access_token }
#             end.to_not(change { user.reload.sects.count })
#           end
#
#           it 'returns not_accetable' do
#             post :subscribe, params: { id: sect.id, access_token: user.access_token }
#             expect(response).to have_http_status(:not_acceptable)
#           end
#         end
#       end
#     end
#   end
# end
